'use client';
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";

export default function TransManager() {
    const income = useAppSelector((state) => state.income?.value);
    const expense = useAppSelector((state) => state.expense?.value);
    const saving = useAppSelector((state) => state.saving?.value);
    const budget = useAppSelector((state) => state.budget?.value);
    const totalIncome = income && income.length > 0
        ? income.reduce((total, item) => total + parseFloat(item.Amount || 0), 0)
        : 0;
    const totalExpense = expense && expense.length > 0
        ? expense.reduce((total, item) => total + parseFloat(item.Amount || 0), 0)
        : 0;

    const totalSaving = saving && saving.length > 0
        ? expense.reduce((total, item) => total + parseFloat(item.Amount || 0), 0)
        : 0;

    return (
        <div className="p-4 w-full text-center flex  flex-col gap-8 items-center">
            {income && income.length > 0 ? (
                <div className="text-lg font-semibold flex flex-col gap-4">
                    <p>Total Income: <span className="text-green-500">${totalIncome}</span></p>
                    <p>Total Expenses: <span className="text-red-500">${totalExpense}</span></p>
                    <p>Total Savings: <span className="text-orange-500">${totalSaving}</span></p>
                    {totalIncome + totalSaving < totalExpense && <p>Your expenses <span className="text-red-500">OUTMATCH</span> your income and current savings! Please Reevaluate your finances</p>}
                    {budget < totalExpense ? <p>This month, you exceeded your budget by ${totalExpense - budget}</p> : <p>Within budget this time cool!</p>}
                </div>
            ) : (
                <div>
                    <p>No income data available.</p>
                    <Link href="/finances">
                        <button className="bg-blue-500 text-white p-2 rounded mt-4">
                            Go to Finances
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}
