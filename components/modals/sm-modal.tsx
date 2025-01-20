import { IoClose } from 'react-icons/io5';

export default function SmallModalItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full" data-close="true">
      <div
        data-close="true"
        className="hidden max-md:block bg-main text-white cursor-pointer p-[20px] rounded-full relative w-fit mb-[-30px] z-[30] mx-auto"
      >
        <IoClose className="pointer-events-none" size={20} />
      </div>
      <div className="mx-auto bg-white w-[400px] max-md:w-full max-md:min-h-[60dvh] rounded">
        {children}
      </div>
    </div>
  );
}
