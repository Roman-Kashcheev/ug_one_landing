
export default function MediumModalItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full" data-close="true">
      <div
        data-close="true"
        className="hidden max-md:block bg-main text-white cursor-pointer p-[20px] rounded-full relative w-fit mb-[-30px] z-[30] mx-auto"
      >
        {/* <IoClose className="pointer-events-none" size={20} /> */}
      </div>
      <div className="mx-auto bg-background max-w-full w-[900px] rounded p-4 max-h-[90dvh] overflow-y-auto max-md:rounded-b-none">
        {children}
      </div>
    </div>
  );
}
