export const handleResponseError = (response) => {
  if (response.ok) {
    return;
  }

  if (response.status === 400 || 404) {
    console.log(response.status);
    console.log("잘못된 요청입니다.");
  } else if (response.status === 401) {
    console.log(response.status);
    alert("로그인 세션이 만료되었습니다. 다시 로그인해주세요.");
    // removeTokenCookie("accessToken");
    // navigate("/login");
  } else if (response.status >= 500) {
    console.log(response.status);
    console.log("서버에서 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
  } else {
    console.log(response.status);
    console.log("알 수 없는 오류가 발생했습니다.");
  }
};
