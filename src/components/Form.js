import { useState } from "react";

export default function Form() {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [amount, setAmount] = useState('')

    const handleCreate = (e) => {
        e.prevent.default()
    }

    return (
        <div className="form">
            <h3>Add new transaction</h3>

            <form onSubmit={handleCreate}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        required
                        type="text"
                        name="name"
                        placeholder="enter your name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="form-group radio">
                    <label>Type</label>
                    <div className="radio_group">
                        <input
                            required
                            type="radio"
                            value='income'
                            name="income"
                            checked={type === 'income'}
                            onChange={e => setType('income')}
                        />
                        <label>Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="expense"
                            placeholder="Expense"
                            checked={type === 'expense'}
                            onChange={e => setType('expense')}
                        />
                        <label>Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Amount</label>
                    <input
                        type="number"
                        value={amount}
                        name="amount"
                        placeholder="enter your amount"
                        onChange={e => setAmount(e.target.value)}
                    />
                </div>

                <button className="btn" type="submit" >Add Transaction</button>
            </form>

            <button className="btn cancel_edit">Cancel Edit</button>
        </div>
    );
}
