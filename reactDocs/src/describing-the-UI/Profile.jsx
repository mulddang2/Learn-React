export default function Profile() {
  const user = {
    name: 'kuromi',
    imageUrl:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/90f9af29-a2ea-4c71-be11-6489816dae27/dfrfnz8-8a9d60bf-88c5-4260-a2f4-b97709058180.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkwZjlhZjI5LWEyZWEtNGM3MS1iZTExLTY0ODk4MTZkYWUyN1wvZGZyZm56OC04YTlkNjBiZi04OGM1LTQyNjAtYTJmNC1iOTc3MDkwNTgxODAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LPU9hES5y0qKE7gQ4EWIyjoOCUQUQQXe4WnHj0FZNdg',
    imageSize: 90,
  };
  return (
    <img
      src={user.imageUrl}
      alt={user.name}
      style={{
        width: user.imageSize,
        height: user.imageSize,
      }}
    />
  );
}