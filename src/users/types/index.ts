import { ApiProperty } from "@nestjs/swagger";

export class LoginUserRequest {
    @ApiProperty( { example: 'Ivan' } )
    username: string;

    @ApiProperty( { example: 'ivan123' } )
    password: string;
}

export class LoginUserResponse {
    @ApiProperty( { example: {user: {
        userId: 1,
        username: 'Ivan',
        password: 'ivan123',
    }} } )
    user: {
        userId: number;
        username: string;
        password: string;
    };

    @ApiProperty( { example: 'logged in' } )
    msg: string;
}

export class LogoutUserResponse {
    @ApiProperty( { example: 'session has ended' } )
    msg: string;
}

export class LoginCheckResponse {
    @ApiProperty( { example: 1 } )
    userId: string;

    @ApiProperty( { example: 'Ivan' } )
    username: string;

    @ApiProperty( { example: 'ivan@gmail.com' } )
    email: string;
}

export class SignupResponse {
    @ApiProperty( { example: 1 } )
    id: string;

    @ApiProperty( { example: 'Ivan' } )
    username: string;

    @ApiProperty( { example: '$2b$10$mG9CxF6Ri4b8l3/FdKPJd.iP..aXauU5H8vUyd8zJ.99AGX4dTK2.' } )
    password: string;

    @ApiProperty( { example: 'ivan@gmail.com' } )
    email: string;

    @ApiProperty( { example: '2024-01-11T13:27:22.542Z' } )
    updatedAt: string;

    @ApiProperty( { example: '2024-01-11T13:27:22.542Z' } )
    createdAt: string;
}