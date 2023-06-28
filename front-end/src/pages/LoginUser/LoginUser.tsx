import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import axios from "axios";
import { ColDef } from "ag-grid-community";

const LoginUser = () => {
    // コンポーネントがマウントされた時に実行されるコード
    // 第二引数の空配列[]は、依存関係がないことを示し、マウント時のみ実行することを意味します
    useEffect(() => {
        // 優先：フロントエンドデバッグ時にブレークポイントで停止しない原因を調べる

        // (注意)パスのテスト、hostは実際には書かない
        const findAllUrl = "http://localhost:5000/login-user";

        const fetchData = async () => {
            try {
                const response = await axios.get(findAllUrl);
                setData(response.data);
            } catch (error) {
                setData([]);
                console.error("データの取得に失敗しました:", error);
            }
        };

        fetchData();
    }, []);

    const [data, setData] = useState([]);

    const columnDefs: ColDef[] = [
        { headerName: "Account", field: "account", colId: "account", headerTooltip: "account", tooltipField: "account", pinned: "left", width: 200 },
        /* { headerName: "Password", field: "password" } パスワードはデータ取得しない */
        { headerName: "User name", field: "userName", colId: "userName", headerTooltip: "userName", width: 100 } /* , tooltipFieldは削除できるかも */,
        { headerName: "Enabled", field: "enabled", colId: "enabled", headerTooltip: "enabled", tooltipField: "enabled", width: 100 },
        { headerName: "Account non expired", field: "accountNonExpired", colId: "accountNonExpired", headerTooltip: "accountNonExpired", tooltipField: "accountNonExpired", width: 100 },
        { headerName: "Account non locked", field: "accountNonLocked", colId: "accountNonLocked", headerTooltip: "accountNonLocked", tooltipField: "", width: 100 },
        { headerName: "Credentials non expired", field: "credentialsNonExpired", colId: "credentialsNonExpired", headerTooltip: "credentialsNonExpired", tooltipField: "credentialsNonExpired", width: 100 },
        { headerName: "loginUser roles", field: "loginUserRoleDtos", colId: "loginUserRoleDtos", headerTooltip: "loginUserRoleDtos", tooltipField: "loginUserRoleDtos", width: 200 },
        { headerName: "Sort irder", field: "sortOrder", colId: "sortOrder", headerTooltip: "sortOrder", tooltipField: "sortOrder", width: 100 },
        { headerName: "Is deleted", field: "isDeleted", hide: true },
        { headerName: "Created at", field: "createdAt", hide: true },
        { headerName: "Updated at", field: "updatedAt", hide: true },
        { headerName: "Timestamp", field: "timestamp", hide: true },
    ];

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="content-header text-start mt-1">
                            <span className="m-1">(breadcrumb例) HOME {">"} LoginUser</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="content-main mt-1">
                        <div className="ag-theme-alpine" style={{ height: "350px", width: "100%" }}>
                            <AgGridReact columnDefs={columnDefs} rowData={data}></AgGridReact>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="content-footer text-start mt-1">
                        <button type="button" className="btn btn-info btn-sm">
                            新規登録
                        </button>
                        <span className="m-1">メモ：gridのheightを自動計算する(高さ = スクリーン高さ - (header + content-header + content-footer) - 10(content分マージン))</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginUser;
