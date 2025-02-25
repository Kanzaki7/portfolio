import { useEffect, useRef } from 'react';
import { createAvatar } from '@dicebear/core';
import { avataaars } from '@dicebear/collection';

function Avatar() {
  const avatarRef = useRef(null);

  useEffect(() => {
    // Generate the avatar
    const avatar = createAvatar(avataaars, {
        avatarStyle: 'Transparent',
        topType: 'ShortHairTheCaesarSidePart',
        accessoriesType: 'Blank',
        hairColor: 'Brown',
        facialHairType: 'Blank',
        clotheType: 'BlazerShirt',
        eyeType: 'EyeRoll',
        eyebrowType: 'DefaultNatural',
        mouthType: 'Tongue',
        skinColor: 'Pale',
    });

    // Insert the SVG into the DOM
    if (avatarRef.current) {
      avatarRef.current.innerHTML = avatar.toString();

      // Add interactivity
      const leftEye = avatarRef.current.querySelector('#left-eye');
      const rightEye = avatarRef.current.querySelector('#right-eye');

      const handleMouseMove = (e) => {
        const rect = avatarRef.current.getBoundingClientRect();
        const avatarCenterX = rect.left + rect.width / 2;
        const avatarCenterY = rect.top + rect.height / 2;

        const angleLeft = Math.atan2(e.clientY - avatarCenterY, e.clientX - (avatarCenterX - 50)); // Adjust for left eye position
        const angleRight = Math.atan2(e.clientY - avatarCenterY, e.clientX - (avatarCenterX + 50)); // Adjust for right eye position

        const distance = 5; // How far the eyes move

        if (leftEye) {
          leftEye.setAttribute('cx', 50 + Math.cos(angleLeft) * distance);
          leftEye.setAttribute('cy', 50 + Math.sin(angleLeft) * distance);
        }

        if (rightEye) {
          rightEye.setAttribute('cx', 150 + Math.cos(angleRight) * distance);
          rightEye.setAttribute('cy', 50 + Math.sin(angleRight) * distance);
        }
      };

      document.addEventListener('mousemove', handleMouseMove);

      // Cleanup
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return <div ref={avatarRef}></div>;
}

export default Avatar;


