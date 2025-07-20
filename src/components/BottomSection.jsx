export function BottomSection({ body, name, title }) {
  return (
    <section className="w-full h-1/2 md:h-screen md:py-48 md:-mr-42 z-10">
      <div className="bg-[url('./assets/images/pattern-quotes.svg'),_url('./assets/images/pattern-curve.svg')] bg-position-[top_center,_bottom_left] bg-size-[12rem_auto,_20rem_auto] w-full h-full bg-no-repeat ">
        <div className="p-6 pt-12 md:pl-32">
          <p className="text-2xl md:text-4xl text-center font-light md:text-left">
            <q>{body}</q>
          </p>
        </div>
        <div className="text-lg text-center md:text-2xl md:text-left md:mt-6 md:pl-30">
          <p className="font-bold md:inline">{name}</p>
          <p className=" text-Gray-400 md:inline md:ml-2">{title}</p>
        </div>
      </div>
    </section>
  );
}
