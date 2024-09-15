import loader from '../../assets/giphy.gif';

const Spinner = () => {
    return (
        <div className='container mx-auto my-10'>
            <img className='w-1/2 mx-auto h-[500px]' src={loader} alt="" />
        </div>
    );
};

export default Spinner;