import TransManager from "@/components/transManager";

export default function Home() {

  return (
    <div className="bg-white h-full flex flex-row">
      <TransManager />
      <div> Incomes pie chart</div>
      <div>Expenses pie chart</div>
    </div>
  );
}
