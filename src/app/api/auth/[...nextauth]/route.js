// authOptions.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/connection/db";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const userFound = await prisma.tbusers.findUnique({
          where: { email: credentials.email },
          include: { tbroles: true }, // Incluir roles en la consulta
        });

        if (!userFound) throw new Error("Usuario no encontrado");

        const matchPassword = await bcrypt.compare(
          credentials.password,
          userFound.password
        );
        if (!matchPassword) throw new Error("La contraseña es incorrecta");

        if (userFound.status === false)
          throw new Error("Tu cuenta está inactiva");

        return {
          email: userFound.email,
          name: `${userFound.firstName} ${userFound.lastName}`,
          image: userFound.profileImage,
          role: userFound.tbroles.role, // Incluir el rol en el usuario
        };
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role; // Incluir el rol en el token
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role; // Incluir el rol en la sesión
      session.user.token = token; // Incluir el token completo en la sesión
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
