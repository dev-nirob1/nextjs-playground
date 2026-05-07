'use client'
const AddProperty = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const title = formData.get('title')
        const location = formData.get('location')
        const price = formData.get('price')
        const bedrooms = formData.get('bedrooms')
        const image = formData.get('image')
        const propertyType = formData.get('propertyType')
        const description = formData.get('description')
        // console.log({ title, location, price, bedrooms, image, propertyType, description })

        const response = await fetch('/api/properties', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, location, price, bedrooms, image, propertyType, description })
        })
        const result = await response.json()
        // console.log(result);
        if (result.result.acknowledged) {
            alert('data added successfully')
        }
        // console.log(result)
    }
    return (
        <div>
            <h1 className="text-3xl text-center font-bold">
                Add Property
            </h1>
            <form onSubmit={handleSubmit} className="max-w-[80%] mx-auto mt-8 p-4 border rounded space-y-4">
                <div className='grid grid-cols-2 gap-4'>
                    <label htmlFor="title">Title
                        <input className="border rounded p-2 w-full" type="text" name="title" placeholder='title' />
                    </label>
                    <label htmlFor="location">Location
                        <input className="border rounded p-2 w-full" type="text" name="location" placeholder='location ' />
                    </label>
                    <label htmlFor="price">Price
                        <input className="border rounded p-2 w-full" type="number" name="price" placeholder='price' />
                    </label>
                    <label htmlFor="bedrooms">Bedrooms
                        <input className="border rounded p-2 w-full" type="number" name="bedrooms" placeholder='bedrooms' />
                    </label>
                    <label htmlFor="image">Image
                        <input className="border rounded p-2 w-full" type="url" name="image" placeholder='image URL' />
                    </label>
                    <select className="border rounded p-2 w-full" name="propertyType">
                        <option>Apartment</option>
                        <option>Villa</option>
                        <option>Office</option>
                        <option>Studio</option>
                    </select>
                </div>
                <label htmlFor="description">Description
                    <textarea className="border rounded p-2 w-full" name="description" placeholder='description'></textarea>
                </label>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded">
                    Add Property
                </button>
            </form>
        </div>
    );
};

export default AddProperty;