import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { user as getUserProfile } from "./apis/users";
import Routers from "./common/Routers";
import Footer from "./components/Footer";
import UserStore from "./contexts/UserStore";



function App() {
    const [theme, setTheme] = useState(window?.Telegram?.WebApp?.colorScheme || "light");
    const [telegram, setTelegram] = useState(window?.Telegram?.WebApp || null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [user, setUser] = useState(null);
    const lightTheme = createTheme({
        palette: {
            background: {
                default: "#F5F5F5",
            },
            text: {
                primary: "#000000",
            },
        },
    });

    const darkTheme = createTheme({
        palette: {
            background: {
                default: "#121212",
            },
            text: {
                primary: "#ffffff",
            },
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        "& label": {
                            color: "#ffffff",
                        },
                        "& .MuiInput-underline:before": {
                            borderBottomColor: "#ffffff",
                        },
                    },
                },
            },
        },
    });

    const getUser = useCallback(async () => {
        if (telegram?.initDataUnsafe?.user?.id) {
            const res = await getUserProfile(telegram?.initDataUnsafe?.user?.id, {
                username: telegram?.initDataUnsafe?.user?.username,
                ref_by: window.location.search.split("ref=")[1]?.trim(),
            });
            if (res) {
                setUser(res);
            } else {
                toast.error(`Cannot fetch user`);
            }
        }
    }, [telegram]);

    useEffect(() => {
        getUser();
    }, [getUser]);

    return (
        <UserStore.Provider
            value={{
                token,
                setToken,
                theme,
                setTheme,
                user,
                setUser,
                telegram,
                setTelegram,
                getUser,
            }}
        >
            <BrowserRouter>
                <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
                    {/* <Toolbar /> */}
                    <Routers />
                    <Footer />

                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme={theme}
                    />
                </ThemeProvider>
            </BrowserRouter>
        </UserStore.Provider>
    );
}
export default App;
