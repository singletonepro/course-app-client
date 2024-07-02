import ReactLoading from "react-loading";

const LoadingPage = () => {

    return (
        <div style={{width: '100%', height: '100vh', background: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)' , display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ReactLoading
                type={"bubbles"}
                color={"black"}
                height={100}
                width={100}
            />
        </div>
    );
};

export {LoadingPage};
