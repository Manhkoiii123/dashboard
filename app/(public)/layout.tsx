import { ModeToggle } from "@/components/ui/mode-toggle";

type Props = {
  children?: React.ReactNode;
};

export default function PublicLayout({ children }: Props) {
  return (
    <>
      <div className="h-screen items-center justify-center flex">
        {children}
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
