import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profileAvatar from "@/assets/ad-profile.webp";

const ProfileAvatar: React.FC = () => {
    return (
        <Avatar
            className="h-12 w-12 mb-8"
            role="img"
            aria-label="Ariel Diaz's Profile Picture"
        >
            <AvatarImage src={profileAvatar.src} alt="Ariel Diaz's Headshot" />
            <AvatarFallback aria-hidden="true">AD</AvatarFallback>
        </Avatar>
    );
};

export default ProfileAvatar;
