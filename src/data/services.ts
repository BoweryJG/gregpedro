export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  benefits: string[];
  process: string[];
  technology?: string;
  faq?: { question: string; answer: string }[];
}

export const services: Service[] = [
      title: 'Dental Implants',
      shortDescription: 'Replace missing teeth with permanent, natural-looking dental implants crafted by Dr. Pedro.',
      fullDescription: 'Dental implants are titanium posts surgically placed into the jawbone beneath your gums to provide a stable foundation for artificial teeth. With Dr. Pedro\'s artistic eye and championship-level precision, these implants offer a long-term solution for missing teeth while preserving facial structure and preventing bone deterioration. As an ADA-Certified Prosthodontist with over 30 years of experience, Dr. Pedro brings unparalleled expertise to every implant procedure.',
      image: '/images/services/dental-implants.jpg',
      benefits: [
        'Looks and functions like natural teeth with Dr. Pedro\'s artistic approach',
        'Prevents bone loss in the jaw through precise placement techniques',
        'Improves ability to eat and speak with confidence',
        'Long-lasting solution (can last a lifetime with proper care)',
        'No adhesives or removal needed - a truly permanent solution'
      ],
      process: [
        'Comprehensive consultation with Dr. Pedro for personalized treatment planning',
        'Precision implant placement surgery using advanced techniques',
        'Monitored healing period (osseointegration)',
        'Custom abutment placement designed for your unique smile',
        'Artistically crafted crown attachment for natural aesthetics'
      ],
      technology: 'yomi'
    },
    {
      id: 'tmj-treatment',
      title: 'TMJ Treatment',
      shortDescription: 'Find relief from TMJ pain and dysfunction with Dr. Pedro\'s specialized treatment options.',
      fullDescription: 'Temporomandibular Joint (TMJ) disorders can cause significant pain and dysfunction in the jaw joint and muscles. As Staten Island\'s leading TMJ specialist, Dr. Pedro offers comprehensive treatment options to alleviate pain, restore function, and improve overall oral health for those suffering from TMJ disorders. His approach combines advanced diagnostic techniques with personalized treatment plans to address the root cause of your TMJ issues.',
      image: '/images/services/tmj-treatment.jpg',
      benefits: [
        'Relief from jaw pain, headaches, and migraines',
        'Improved jaw function and range of motion',
        'Reduced teeth grinding and clenching',
        'Better sleep quality and overall well-being',
        'Non-surgical options available for most patients'
      ],
      process: [
        'Comprehensive TMJ evaluation and diagnosis',
        'Customized treatment plan based on your specific condition',
        'Implementation of appropriate therapies (oral appliances, Botox, etc.)',
        'Regular monitoring and adjustments as needed',
        'Long-term management strategies for lasting relief'
      ],
      faq: [
        {
          question: 'What causes TMJ disorders?',
          answer: 'TMJ disorders can be caused by various factors including jaw injury, stress, arthritis, teeth grinding (bruxism), misaligned teeth, dental procedures, connective tissue disorders, tooth loss, and jaw muscle fatigue.'
        },
        {
          question: 'Does TMJ require surgery?',
          answer: 'TMJ does not always require surgery. In many cases, it can be treated with non-surgical methods such as physical therapy, stress management, pain medication, lifestyle changes, oral splints or guards, or injections. Surgery may be recommended in severe cases.'
        },
        {
          question: 'Is Botox safe for TMJ?',
          answer: 'Yes, Botox treatment for TMJ is very safe and approved by the American Dental Association (ADA) for TMJ treatment. Relief typically lasts 3-6 months, though some patients experience longer or even permanent success.'
        }
      ]
    },
    {
      id: 'implant-restoration',
      title: 'Implant Restoration',
      shortDescription: 'Restore damaged implants with Dr. Pedro\'s expert care and artistic vision.',
      fullDescription: 'Implant restoration involves repairing or replacing the visible portion of an implant that may have become damaged or worn over time. Dr. Pedro\'s specialized training in prosthodontics and over 600 hours of continuing education make him uniquely qualified to restore your implants, ensuring they continue to function properly and look completely natural for years to come.',
      image: '/images/services/implant-restoration.jpg',
      benefits: [
        'Extends the life of your dental implant with expert care',
        'Maintains proper function and aesthetics with artistic precision',
        'Prevents further complications through early intervention',
        'Preserves your investment in dental implants for the long term',
        'Minimally invasive procedures for your comfort'
      ],
      process: [
        'Detailed evaluation of implant condition by Dr. Pedro personally',
        'Customized treatment planning based on your specific needs',
        'Precision restoration procedure using advanced techniques',
        'Meticulous final adjustments for perfect fit and function',
        'Comprehensive maintenance instructions for lasting results'
      ]
    },
    {
      id: 'full-mouth-reconstruction',
      title: 'Full Mouth Reconstruction',
      shortDescription: 'Transform your smile completely with Dr. Pedro\'s comprehensive reconstruction expertise.',
      fullDescription: 'Full mouth reconstruction is a comprehensive treatment that rebuilds or simultaneously restores all of the teeth in both the upper and lower jaws. Dr. Pedro combines his expertise in implant dentistry with advanced techniques and artistic vision to create a functional, comfortable, and beautiful smile. His background as a Staten Island sports legend translates into the same championship-level dedication to your complete smile transformation.',
      image: '/images/services/full-mouth.jpg',
      benefits: [
        'Complete transformation of your smile with life-changing results',
        'Improved oral function and health through comprehensive planning',
        'Enhanced facial appearance with Dr. Pedro\'s aesthetic expertise',
        'Long-term solution for multiple dental issues with unified treatment',
        'Customized treatment plan tailored to your unique needs and goals'
      ],
      process: [
        'In-depth examination and diagnosis with Dr. Pedro',
        'Advanced digital treatment planning for precision results',
        'Preparatory procedures if needed for optimal outcomes',
        'Strategic implant placement and comfortable temporary restoration',
        'Artistic final restoration placement for natural beauty'
      ]
    },
    {
      id: 'aesthetic-treatments',
      title: 'Aesthetic Treatments',
      shortDescription: 'Enhance your facial appearance with our advanced aesthetic treatments including BTL Emface.',
      fullDescription: 'About Face Dental & Aesthetic Boutique offers cutting-edge aesthetic treatments to complement your beautiful smile. Dr. Pedro has invested in the most sophisticated technologies available to maximize your success with minimal discomfort and downtime. Our aesthetic treatments are designed to enhance your natural beauty and help you look as good as you feel.',
      image: '/images/services/btl-emface.jpg',
      benefits: [
        'Non-surgical facial rejuvenation with advanced technologies',
        'Reduced fine lines and wrinkles for a more youthful appearance',
        'Improved skin texture and tone with minimal downtime',
        'Comprehensive approach combining dental and facial aesthetics',
        'Treatments performed in a comfortable, spa-like environment'
      ],
      process: [
        'Comprehensive skin analysis using Emage IMAGE PRO technology',
        'Personalized treatment plan based on your aesthetic goals',
        'Implementation of appropriate treatments (BTL Emface, etc.)',
        'Follow-up care and maintenance recommendations',
        'Ongoing support for long-lasting results'
      ],
      technology: 'emface'
    },
    {
      id: 'cosmetic-dentistry',
      title: 'Cosmetic Dentistry',
      shortDescription: 'Enhance your smile with our range of cosmetic dental procedures designed by Dr. Pedro.',
      fullDescription: 'Our cosmetic dentistry services focus on improving the appearance of your smile while maintaining optimal function. From teeth whitening to veneers, Dr. Pedro offers a variety of treatments to help you achieve the smile you have always wanted. His artistic eye and attention to detail ensure results that are not just beautiful, but natural-looking and harmonious with your facial features.',
      image: '/images/services/cosmetic-dentistry.jpg',
      benefits: [
        'Enhanced smile aesthetics with personalized design',
        'Increased confidence in your smile',
        'Customized to your preferences and needs',
        'Can address multiple concerns simultaneously',
        'Modern techniques for natural-looking results'
      ],
      process: [
        'Smile analysis consultation with Dr. Pedro',
        'Treatment planning and digital previews',
        'Preparation procedures',
        'Treatment implementation',
        'Final adjustments and maintenance plan'
      ]
    },
    {
      id: 'preventive-care',
      title: 'Preventive Care',
      shortDescription: 'Maintain your oral health with regular preventive care.',
      fullDescription: 'Preventive dentistry is the practice of caring for your teeth to keep them healthy. This helps to avoid cavities, gum disease, enamel wear, and more. We offer comprehensive preventive care services to help you maintain optimal oral health.',
      image: '/images/services/preventive-care.jpg',
      benefits: [
        'Prevents dental problems before they start',
        'Reduces the need for extensive dental work',
        'Saves money in the long run',
        'Maintains overall health',
        'Regular monitoring of oral conditions'
      ],
      process: [
        'Regular dental check-ups',
        'Professional cleanings',
        'Diagnostic imaging when needed',
        'Oral cancer screenings',
        'Personalized home care instructions'
      ]
    }
  ];

