import { MouseEventHandler } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { handleResponseError } from "../../utils";

export const Footer = () => {

    const navigate = useNavigate();
    const [tokenCookie, setTokenCookie, removeTokenCookie] = useCookies(['accessToken']);
    const token: string = tokenCookie.accessToken;

    const onLogOut: MouseEventHandler<HTMLAnchorElement> = async (event) => {
        event.preventDefault();

        const url = `${process.env.REACT_APP_SERVER_API}/auth/signout`

        const requestOptions = {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`
            },
            credentials: 'include' as RequestCredentials,
        };

        const response = await fetch(url, requestOptions);
        handleResponseError(response);

        removeTokenCookie("accessToken");
        navigate(`/login`);
    }

    return (
        <footer className="flex flex-col justify-center fixed-bottom w-full mt-20">
            <div className="flex justify-center items-center px-16 py-11 w-full bg-blue-800 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col mt-2 w-full max-w-[1100px] max-md:max-w-full">
                    <div className="flex gap-5 justify-between items-start w-full max-md:flex-wrap max-md:max-w-full">
                        <div className="flex flex-col mt-1 text-white">
                            <div className="text-3xl font-bold tracking-tighter">ESI</div>
                            <div className="mt-8 text-base leading-6">
                                우리 ESI는 최강의 기술진이 최고 서비스로 기계설비의 유지관리 및 위탁선임 고민을 해결해 드립니다.
                            </div>
                        </div>
                        <div className="max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-row max-md:gap-0">
                                <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col text-sm leading-6 text-white max-md:mt-10">
                                        <div className="text-lg font-medium leading-5">Company</div>
                                        <ul className="mt-5">
                                            <li><a href="/company">About Us</a></li>
                                            <li><a href="/history">Inspection history</a></li>
                                            {typeof token == 'string' ?
                                                <li><a href="" onClick={onLogOut}>Logout</a></li>
                                                : <li><a href="/login">Login</a></li>
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow text-sm leading-6 text-white max-md:mt-10">
                                        <div className="text-lg font-medium leading-5">
                                            Services
                                        </div>
                                        <ul className="mt-5">
                                            <li><a href="/service">Our services</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow text-sm leading-6 text-white max-md:mt-10">
                                        <div className="text-lg font-medium leading-5">
                                            Contact Us
                                        </div>
                                        <ul className="mt-5">
                                            <li><a href="/contact">Contact</a></li>
                                            {/* <li><a href="inquiry">Inspection Inquiry</a></li> */}
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 text-sm text-white max-md:mt-10 max-md:max-w-full">
                        <ul className="mb-1">
                            <li>esi0207@naver.com</li>
                            <li>031-986-9990</li>
                            <li>경기도 고양시 일산동구 성현로 659, 2층 202호</li>
                            <li></li>
                        </ul>
                        © Copyright ESI Inc.
                    </div>
                </div>
            </div>
        </footer>
    );
}
