import { StyleSheet } from "react-native";

export const screensStyles = StyleSheet.create({
    wrapper: {
        display: "flex",
        height: "100%",
        justifyContent: "flex-end",
    },
    container: {
        width: "100%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "#fff",
        position: "relative",
        paddingBottom: 30,
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },

    importImage: {
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
        width: 120,
        height: 120,
        left: "50%",
        transform: [{ translateX: -60 }, { translateY: -60 }],
        position: "absolute",
    },
    userIcon: {
        width: 120,
        height: 120,
    },
    addButton: {
        transform: [{ translateX: 105 }, { translateY: -40 }],
    },
    formContainer: {
        alignItems: "center",
        gap: 16,
        width: "90%",
        marginHorizontal: "auto",
        paddingBottom: 0,
    },
    signIn: {
        marginTop: 40,
        width: "100%",
        gap: 0,
    },
    header: {
        marginTop: 92,
        marginBottom: 32,
    }
});
