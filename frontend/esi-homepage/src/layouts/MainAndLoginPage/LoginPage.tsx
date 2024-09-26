import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { handleResponseError } from "../../utils";

export const LoginPage = () => {

    const navigate = useNavigate();

    const [tokenCookie, setTokenCookie] = useCookies(['accessToken']);
    const token = tokenCookie.accessToken;

    const onLogin = async () => {

        const username = document.getElementById('id') as HTMLInputElement;
        const password = document.getElementById('password') as HTMLInputElement;

        const url = `${process.env.REACT_APP_SERVER_API}/auth/signin`;

        const data = {
            username: username.value,
            password: password.value
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        };

        try {
            const response = await fetch(url, requestOptions);

            handleResponseError(response);

            const responseJson = await response.json();
            const accessToken = responseJson.accessToken;

            setTokenCookie('accessToken', accessToken);

            navigate(`/`);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div>
                <div className="flex items-center justify-center">
                    <div className="mt-40 text-4xl text-blue-800 font-[1000] leading-[50px] max-w-[525px]">
                        {/* <section className="ml-12">안녕하세요.</section> */}
                        <section className="text-base mt-3">관리자만 로그인 할 수 있습니다.</section>
                    </div>
                </div>

                <div className="flex items-center justify-center mt-5 ml-80 mr-80 max-md:ml-10 max-md:mr-10">
                    <div className="flex flex-col px-20 py-8 text-base font-extrabold leading-7 whitespace-nowrap rounded-3xl bg-blue-800 bg-opacity-10 max-w-[406px] text-slate-300">
                        <div className="self-center text-3xl text-black leading-[49.92px]">
                            Login
                        </div>
                        <div className="justify-center items-start pr-1 pl-4 mt-5 font-semibold bg-white rounded border-2 border-solid border-[color:var(--Light-Grey,#BBC8D4)]">
                            <input type="text" id="id" placeholder="ID" />
                        </div>
                        <div className="justify-center items-start pr-16 pl-4 mt-5 font-semibold bg-white rounded border-2 border-solid border-[color:var(--Light-Grey,#BBC8D4)]">
                            <input type="text" id="password" placeholder="Password" />
                        </div>
                        <div className="justify-center self-center px-10 mt-7 text-xl text-white bg-blue-800 rounded-2xl border border-blue-800 border-solid leading-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                            <button onClick={() => onLogin()}>Login</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}