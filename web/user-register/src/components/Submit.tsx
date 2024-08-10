import React from 'react'

interface ISubmitProps {
    value: string
}

const Submit = ({ value }: ISubmitProps) => {
    return (
        <input
            type="submit"
            className="mt-6 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 cursor-pointer transition duration-300"
            value={value}
        />
    )
}

export default Submit