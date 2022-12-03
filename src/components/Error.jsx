function Error({children}) {
    return (
        <div className='bg-red-400 text-white text-center p-3 uppercase font-bold mb-3 rounded-lg'>
            <p>
                {children}
            </p>
        </div>
    )
}

export default Error