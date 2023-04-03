import Image from 'next/image';

export default function ProfilePic() {
	return (
		<Image
			alt="Profile Picture for JH"
			height={144}
			src="/images/profile.jpg"
			width={144}
		/>
	);
}
