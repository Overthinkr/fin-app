'use client';
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";

export default function TransManager() {
    const income = useAppSelector((state) => state.income?.value);

    console.log(income)

    return (
        <div className="p-4">
            {income && income.length > 0 ? (
                <div className="text-lg font-semibold">
                    Total Income: ${totalIncome}
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
