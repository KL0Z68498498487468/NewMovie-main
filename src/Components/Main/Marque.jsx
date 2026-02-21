import React from "react";
import Marquee from "react-fast-marquee";

function Marquees({ cinemas }) {
    return (
        <Marquee>
            {cinemas &&
                cinemas.map((items) => (
                    <div className="w-full" key={items.id}>
                        <img
                            className="w-32 h-48 md:w-40 md:h-56 lg:w-50 lg:h-67 px-1 md:px-2"
                            src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                            alt=""
                        />
                    </div>
                ))}
        </Marquee>
    );
}

export default Marquees;
