import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function ProfileCard() {
    return (
        <Card>        
          <CardContent className='flex flex-col items-center'>
            <Avatar className='size-24'>
              <AvatarImage
                src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="User avatar"
                className='object-cover'
                />
              <AvatarFallback>
                <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    alt="No profile"
                    className="w-full h-full object-cover"
                />
              </AvatarFallback>
            </Avatar>
            <h1 className="text-xl font-semibold mt-4 text-center">Firnanda</h1>
            <p>Back-end Engineer</p>
            <div className="flex items-center mt-4 gap-2">
              <Button>Follow</Button>
              <Button variant='outline'>Profile</Button>
            </div>
          </CardContent>
        </Card>
    )
}