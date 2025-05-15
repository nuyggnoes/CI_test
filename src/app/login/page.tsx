import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

export default function page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">LOGIN</h1>
        <form action="" className="flex flex-col gap-4">
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Button label="LOGIN" primary />
        </form>
      </div>
    </div>
  );
}
