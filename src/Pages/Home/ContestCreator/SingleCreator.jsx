import Swal from "sweetalert2";

const SingleCreator = ({item}) => {

    // console.log(item);

    const handelCreatorDetails = () => {
        console.log(item);

        const imageStyles = {
            width: '100px',
            height: '100px',
          };

        Swal.fire({
            title: `${item.name}`,
            html: `
            <img style=${imageStyles} src=${item.image} />
            <br/>
            <p>Phone: ${item.phone}</p>
            <p>Location: ${item.location}</p>
            `,
            showCloseButton: true,
          });
    }


    return (
        <div className="w-80 bg-red-100 rounded-lg mx-auto flex">
            <img className="w-24 h-24 rounded-lg" src={item.image} alt="" />
            <div className="text-center w-full">
                <h4>{item.name}</h4>
                <p>specialization: {item.specialization}</p>
                <button className="btn btn-xs mt-3 btn-info" onClick={handelCreatorDetails}>Details</button>
            </div>
        </div>
    );
};

export default SingleCreator;