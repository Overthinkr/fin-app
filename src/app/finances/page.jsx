'use client';
import { updated } from "@/lib/features/budgetSlice";
import { updatedExpense } from "@/lib/features/expenseSlice";
import { updatedIncome } from "@/lib/features/incomeSlice";
import { updatedSavings } from "@/lib/features/savingSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useRouter } from 'next/navigation'
import { useState } from "react";

export default function Finances() {



    const [budget, setBudget] = useState("");
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [savings, setSavings] = useState([]);
    const [income, setIncome] = useState({ Amount: "", Category: "" });
    const [expense, setExpense] = useState({ Amount: "", Category: "" });
    const [saving, setSaving] = useState({ Amount: "", Category: "" });

    const dispatch = useAppDispatch();
    const router = useRouter();

    const addIncome = () => {
        if (income.Amount && income.Category) {
            setIncomes([...incomes, income]);
            setIncome({ Amount: "", Category: "" });
        }
    };

    const addExpense = () => {
        if (expense.Amount && expense.Category) {
            setExpenses([...expenses, expense]);
            setExpense({ Amount: "", Category: "" });
        }
    };

    const addSaving = () => {
        if (saving.Amount && saving.Category) {
            setSavings([...savings, saving]);
            setSaving({ Amount: "", Category: "" });
        }
    };

    const submitForm = (e) => {
        e.preventDefault()
        console.log(incomes)
        dispatch(updatedIncome(incomes))
        dispatch(updatedExpense(expenses))
        dispatch(updatedSavings(savings))
        dispatch(updated(budget))
        router.push('/')
    }

    return (
        <div>
            <form className="w-full" onSubmit={submitForm}>
                <div className="flex w-full flex-col">
                    <div className="flex flex-row gap-4 m-4 justify-center w-full items-center p-6">
                        <p className="font-semibold text-xl"> Don&apos;t be shy, tell us your budget:</p>
                        <input
                            type="number"
                            value={budget}
                            name="budget"
                            className="border-2 border-green-400 rounded-md items-center text-center"
                            onChange={(e) => setBudget(Number(e.target.value))}
                        />
                    </div>
                    {budget !== '' && <div className="grid grid-cols-2 gap-4 my-10 mx-16">
                        <div className="bg-green-500 rounded-xl p-4 justify-between items-center flex">
                            <div className="gap-4 flex">
                                <input
                                    type="number"
                                    value={income.Amount}
                                    name="incomeAmount"
                                    placeholder="Income in $"
                                    className="rounded-lg p-1 px-3"
                                    onChange={(e) => setIncome({ ...income, Amount: e.target.value })}
                                />
                                <input
                                    type="text"
                                    value={income.Category}
                                    name="incomeCategory"
                                    placeholder="Income Category"
                                    className="rounded-lg p-1 px-3"
                                    onChange={(e) => setIncome({ ...income, Category: e.target.value })}
                                />
                            </div>
                            <button
                                type="button"
                                className="bg-green-500 px-2 py-1 text-white hover:bg-green-400 rounded-sm"
                                onClick={addIncome}
                            >
                                Add Income
                            </button>
                        </div>

                        <div className="row-span-3">
                            <ul className="gap-2 flex flex-col text-center">
                                {incomes.map((income, index) => (
                                    <li key={index} className="bg-green-500 text-black py-2 px-6 rounded-xl">
                                        ${income.Amount} from {income.Category}
                                    </li>
                                ))}
                                {expenses.map((expense, index) => (
                                    <li key={index} className="bg-red-500 text-black py-2 px-6 rounded-xl">
                                        ${expense.Amount} on {expense.Category}
                                    </li>
                                ))}
                                {savings.map((saving, index) => (
                                    <li key={index} className="bg-blue-500 text-black py-2 px-6 rounded-xl">
                                        ${saving.Amount} for {saving.Category}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-red-500 rounded-xl p-4 justify-between items-center flex">
                            <div className="gap-4 flex">
                                <input
                                    type="number"
                                    value={expense.Amount}
                                    name="expenseAmount"
                                    placeholder="Expense in $"
                                    className="rounded-lg p-1 px-3"
                                    onChange={(e) => setExpense({ ...expense, Amount: e.target.value })}
                                />
                                <input
                                    type="text"
                                    value={expense.Category}
                                    name="expenseCategory"
                                    placeholder="Expense Category"
                                    className="rounded-lg p-1 px-3"
                                    onChange={(e) => setExpense({ ...expense, Category: e.target.value })}
                                />
                            </div>
                            <button
                                type="button"
                                className="bg-red-500  px-2 py-1 text-white hover:bg-red-400 rounded-sm"
                                onClick={addExpense}
                            >
                                Add Expense
                            </button>
                        </div>

                        <div className="bg-blue-800 rounded-xl p-4 justify-between items-center flex">
                            <div className="gap-4 flex">
                                <input
                                    type="number"
                                    value={saving.Amount}
                                    name="savingAmount"
                                    placeholder="Savings in $"
                                    className="rounded-lg p-1 px-3"
                                    onChange={(e) => setSaving({ ...saving, Amount: e.target.value })}
                                />
                                <input
                                    type="text"
                                    value={saving.Category}
                                    name="savingCategory"
                                    placeholder="Savings Category"
                                    className="rounded-lg p-1 px-3"
                                    onChange={(e) => setSaving({ ...saving, Category: e.target.value })}
                                />
                            </div>
                            <button
                                type="button"
                                className="bg-blue-800 px-2 py-1 text-white hover:bg-blue-600 rounded-sm"
                                onClick={addSaving}
                            >
                                Add Savings
                            </button>
                        </div>

                        <div className="col-span-2 items-center justify-center text-center">
                            <button type="submit" className="bg-black rounded-xl text-white p-3 px-6"> Analyze✨ </button>
                        </div>
                    </div>
                    }</div>
            </form>
        </div>
    );
}

