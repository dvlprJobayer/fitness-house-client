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
        const short_des = event.target.short_des.value;
        // console.log(name, email, img, supplier, price, quantity, short_des)
        axios.post('https://hidden-taiga-61073.herokuapp.com/add-item', {
            name, email, img, supplier, price, quantity, short_des
        }).then(res => {
            console.log(res)
            event.target.reset();
        }).catch(err => console.error(err))
    }

    return (
        <div className='container'>
            <h1 className='color display-4 text-center my-4'>Add New Item</h1>
            <form onSubmit={handleAdd}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input name='name' type="text" className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Image URL</label>
                            <input name='img' type="url" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Supplier</label>
                            <input name='supplier' type="text" className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Quantity</label>
                            <input name='quantity' type="text" className="form-control" required />
                        </div>
                        <button type="submit" className="btn btn-main btn-lg mt-3 w-50">Add Item</button>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input name='email' type="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea name='short_des' type="text" className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input name='price' type="text" className="form-control" required />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddItem;