import { ClassesType } from "../../shared/types";
export const Class = ({ name, descriotion, img }: ClassesType) => {
  const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col item-center justify-center
  whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90
  
  `;
  return (
    <li className="relative inline-block mx-5 h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{descriotion}</p>
      </div>
      <img src={img} alt="ourclasses-page-img" />
    </li>
  );
};
