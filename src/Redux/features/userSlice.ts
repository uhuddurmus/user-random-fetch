import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  data: User | null;
  loading: boolean;
  error: string;
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser(state) {
      state.data = null;
      state.loading = false;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending,(state:any)=>{
        state.loading=true;
        state.error=""
    });
    builder.addCase(fetchUser.fulfilled, (state:any,action:PayloadAction<User>)=>{
        state.data= action.payload;
        state.loading=false
    })
    builder.addCase(fetchUser.rejected, (state:any)=>{
      state.loading =false;
      state.error= "Error fetching user data"
  })
  },
});

export default userSlice.reducer;


export const fetchUser = createAsyncThunk("fetchUser",async()=>{
    const response = await  axios.get<User>("https://randomuser.me/api/")
    return response.data;
})

export const { clearUser } = userSlice.actions;

type Data = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
};

type Info = {
  seed: string;
  results: number;
  page: number;
  version: string;
};

type User = {
  results: Data[];
  info: Info;
};
