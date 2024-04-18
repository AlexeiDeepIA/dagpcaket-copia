export interface JwtResponse {
    dataUser: {
        success: boolean;
        _id: number;
        name: string;
        email: string;
        token: string;
        expiresIn: string;
    }
}
