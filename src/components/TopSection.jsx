import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
export function TopSection() {
  return (
    <section className="w-full h-1/2">
      <div className="bg-[url('./assets/images/pattern-bg.svg')] bg-contain h-full bg-no-repeat bg-center flex items-center justify-center">
        <div className="bg-[url('./assets/images/image-tanya.jpg')] size-64 rounded-lg bg-cover bg-center bg-no-repeat shadow-black shadow-2xl">
          <div className="bg-white h-9 w-fit rounded-full my-60 ml-6">
            <button>
              <MdNavigateBefore className="size-10" />
            </button>
            <button>
              <MdNavigateNext className="size-10" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
