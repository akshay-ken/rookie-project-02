import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import AvatarTanya from "../assets/images/image-tanya.jpg";
import clsx from "clsx";
export function TopSection({ image, body, title, name, onClick }) {
  const baseClass = clsx(
    "size-64 md:size-96 rounded-lg bg-cover bg-center bg-no-repeat shadow-black shadow-2xl",
    {
      "bg-[url('./assets/images/image-tanya.jpg')]": image == "F",
      "bg-[url('./assets/images/image-john.jpg')]": image == "M",
    }
  );
  return (
    <section className="w-full h-1/2 md:h-screen">
      <div className="bg-[url('./assets/images/pattern-bg.svg')] bg-contain h-full bg-no-repeat bg-center flex items-center justify-center">
        <div className={baseClass}>
          <div className="bg-white h-9 w-fit rounded-full my-60 md:my-92 ml-6">
            <button onClick={onClick}>
              <MdNavigateBefore className="size-10" />
            </button>
            <button onClick={onClick}>
              <MdNavigateNext className="size-10" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
