import React from "react";


export default class Footer extends React.Component{
    constructor()
    {
        super();
        this.name="Footer";
    }
    render() {
        return (


            <footer className="py-5 bg-black">
                <div className="container">
                    <p className="m-0 text-center text-white small">Copyright &copy; POLISTACK 2018 - Hernando Ivan Teddy</p>
                </div>

            </footer>
        );
    }
}