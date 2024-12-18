import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profileAvatar from "@/assets/ad-profile.jpg";

const ProfileAvatar: React.FC = () => {
    return (
        <Avatar className="h-12 w-12 mb-10">
            <AvatarImage src={profileAvatar.src} alt="Profile Avatar" />
            <AvatarFallback>AD</AvatarFallback>
        </Avatar>
    )
}

export default ProfileAvatar;