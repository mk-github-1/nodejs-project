import React, { useEffect /*, useState */ } from "react";

const LoginUserEdit = () => {
    // コンポーネントがマウントされた時に実行されるコード
    // 第二引数の空配列[]は、依存関係がないことを示し、マウント時のみ実行することを意味します
    useEffect(() => {
        console.log("コンポーネントがマウントされました");

        // ここに任意のアクションを追加します
    }, []);

    /*
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = async () => {
        const data = new MyData();
        data.value = inputValue;

        const validationErrors = await validateData(data);
        if (validationErrors.length > 0) {
            console.log(validationErrors);
            return;
        }

        axios
            .post("/api/endpoint", data)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };
*/

    return (
        <>
            LoginUserEditコンポーネントです。 <br />
            -<br />
            {/*
    <div>
      <input type="text" name="account" value={account} onChange={this.handleChange} />
      <input type="password" name="password" value={password} onChange={this.handleChange} />
      <input type="text" name="userName" value={userName} onChange={this.handleChange} />
      <input type="checkbox" name="enabled" checked={enabled} onChange={this.handleChange} />
      <input type="checkbox" name="accountNonExpired" checked={accountNonExpired} onChange={this.handleChange} />
      <input type="checkbox" name="accountNonLocked" checked={accountNonLocked} onChange={this.handleChange} />
      <input type="checkbox" name="credentialsNonExpired" checked={credentialsNonExpired} onChange={this.handleChange} />
      <input type="number" name="sortOrder" value={sortOrder} onChange={this.handleChange} />
      <input type="checkbox" name="isDeleted" checked={isDeleted} onChange={this.handleChange} />
      <input type="text" name="createdAt" value={createdAt} onChange={this.handleChange} />
      <input type="text" name="updatedAt" value={updatedAt} onChange={this.handleChange} />
      <input type="number" name="timestamp" value={timestamp} onChange={this.handleChange} />

      <button type="button" onClick={this.handleSubmit}>送信</button>
    </div>
    */}
        </>
    );
};

export default LoginUserEdit;
