import axios from 'axios';
import React from 'react';

const AddItem = () => {

    const handleAdd = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const img = event.target.img.value;
        const supplier = event.target.supplier.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        console.log(name, email, img, supplier, price, quantity)
        axios.post('https://hidden-taiga-61073.herokuapp.com/add-item', {
            name, email, img, supplier, price, quantity
        }).then(res => console.log(res)).catch(err => console.error(err))
    }

    return (
        <>
            <form className='w-50 mx-auto mt-3' onSubmit={handleAdd}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input name='name' type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input name='email' type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input name='img' type="url" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Supplier</label>
                    <input name='supplier' type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input name='price' type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input name='quantity' type="text" className="form-control" required />
                </div>
                <button type="submit" className="btn bg-color btn-lg">Submit</button>
            </form>
        </>
    );
};

export default AddItem;