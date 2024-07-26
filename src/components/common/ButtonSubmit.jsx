function ButtonSubmit({name}) {
    return (
      <button
        type="submit"
        className="py-2 px-4 w-full bg-blue-500 rounded-md text-white md:col-span-3"
      >
       {name}
      </button>
    );
  }
  
  export default ButtonSubmit;
  