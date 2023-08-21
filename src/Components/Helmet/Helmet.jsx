

const Helmet = (props) => {
    return (
        <div className="py-10">
            <div className="w-95 mx-auto">
                {props.children}
            </div>
        </div>
    )
}

export default Helmet