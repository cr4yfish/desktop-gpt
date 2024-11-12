import Image from "next/image";
import ChatMain from "../components/ChatMain";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Test</h1>
      <ChatMain />
    </main>
  );
}
