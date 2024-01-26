import sigma from "/Companies/sigma.webp";
import aimotive from "/Companies/aimotive.webp";
import kpmg from "/Companies/kpmg.webp";
import mol from "/Companies/mol2.webp";
import accenture from "/Companies/accenture.webp";
import nextstep from "/Companies/nextstep.webp";
import bh from "/Companies/bh-outlined.webp";
const Companies = () => {
    return (
        <div id="SatisfiedCustomers">
            <h1 className="text-3xl font-bold text-center">Satisfied customers</h1>
            <p className="text-lg text-center">Over the years, I had the luck to teach candidates who have graduated with good grades and now working at the following companies.:</p>
            <div id="CompanyLogosContainer" className="overflow-hidden py-10 flex items-center relative">
                <div id="Overlay-Left" className="left-0 absolute h-full w-1/12 z-10 bg-gradient-to-r from-gray-50"></div>
                <div id="Overlay-Right" className="right-0 absolute h-full w-1/12 z-10 bg-gradient-to-l from-gray-50 "></div>
                <div id="SliderContainer" className="flex gap-12 items-center mx-10">
                    <img src={sigma} alt="" style={{ height: 225 }} className="CompanyLogo" />
                    <img src={aimotive} alt="" style={{ height: 225 }} className="CompanyLogo" />
                    <img src={kpmg} alt="" style={{ height: 225 }} className="CompanyLogo" />
                    <img src={mol} alt="" style={{ height: 225 }} className="CompanyLogo" />
                    <img src={accenture} alt="" style={{ height: 225 }} className="CompanyLogo" />
                    <img src={nextstep} alt="" style={{ height: 225 }} className="CompanyLogo" />
                    <img src={bh} alt="" style={{ height: 225 }} className="CompanyLogo" />
                    {/* I have doubled the SliderContainer's images because this way I can avoid using unnecessary JavaScript using. Later I may change my mind. */}
                    <img src={sigma} alt="" style={{ height: 225 }} className="CompanyLogo" />
                    <img src={aimotive} alt="" style={{ height: 225 }} className="CompanyLogo" />
                    <img src={kpmg} alt="" style={{ height: 225 }} className="CompanyLogo" />
                    <img src={mol} alt="" style={{ height: 225 }} className="CompanyLogo" />
                    <img src={accenture} alt="" style={{ height: 225 }} className="CompanyLogo" />
                    <img src={nextstep} alt="" style={{ height: 225 }} className="CompanyLogo" />
                    <img src={bh} alt="" style={{ height: 225 }} className="CompanyLogo" />
                </div>
            </div>
        </div>)
}
export default Companies;