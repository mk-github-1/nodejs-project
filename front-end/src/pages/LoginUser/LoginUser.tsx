import React, { useEffect } from "react";

const LoginUser = () => {
    // コンポーネントがマウントされた時に実行されるコード
    // 第二引数の空配列[]は、依存関係がないことを示し、マウント時のみ実行することを意味します
    useEffect(() => {
        console.log("コンポーネントがマウントされました");

        // ここに任意のアクションを追加します
    }, []);

    return (
        <>
            LoginUserコンポーネントです。 <br />
            -<br />
            -<br />
            -<br />
            -<br />
            -<br />
            -<br />
            -<br />
            -<br />
            -<br />
            -<br />
        </>
    );
};

export default LoginUser;
