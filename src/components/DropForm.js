import React from "react"

const DropForm = () => {
    return (
        <div>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="description">Description</label>
                <input type="text" id="description" name="description" />

                <button>Save</button>
            </form>
        </div>
    )
}

export default DropForm