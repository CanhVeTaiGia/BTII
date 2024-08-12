export default function Button({ children }: { children: string}) {
  return <button className="border-[1px] border-black p-[5px] mr-[10px] rounded-[2px]">{children}</button>;
}
