import TerminalPage from "./pages/TerminalPage";


export default function Layout() {
  return (
    <div className="w-full h-screen grid grid-rows-[70px_1fr] bg-amber-100">
      <header className="p-4 border-b-3 border-zinc-700">Header section w/ buttons</header>

      <TerminalPage/>


    </div>
  );
}
