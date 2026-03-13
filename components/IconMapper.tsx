import { 
  Phone, Mail, ChevronRight, ChevronLeft, 
  CheckCircle2, Star, Quote, ChevronDown, ChevronUp,
  ThumbsUp, ShieldCheck, Wrench, Clock, MapPin, Check, Menu, X 
} from 'lucide-react';

export const IconMapper = ({ name, className }: { name: string; className?: string }) => {
  const icons: Record<string, any> = { 
    Phone, Mail, ChevronRight, ChevronLeft, 
    CheckCircle2, Star, Quote, ChevronDown, ChevronUp, 
    ThumbsUp, ShieldCheck, Wrench, Clock, MapPin, Check, Menu, X 
  };
  const IconComponent = icons[name] || CheckCircle2;
  return <IconComponent className={className} />;
};
