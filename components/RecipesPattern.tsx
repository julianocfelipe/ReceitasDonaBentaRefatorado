import { Card, Button } from "react-native-paper";
import { ReactNode } from "react";
import { ViewStyle } from "react-native";

interface RecipesPatternProps {
  image?: string;
  title: string;
  children?: ReactNode;
  buttonLabel?: string;
  buttonPress?: () => void;
  style?: ViewStyle;
  [key: string]: any; // This allows for additional props passed via spread operator
}

export default function RecipesPattern({
  image,
  title,
  children,
  buttonLabel = "Clique aqui",
  buttonPress,
  ...props
}: Readonly<RecipesPatternProps>) { // <--- Applied Readonly here
  return (
    <Card {...props}>
      {image && <Card.Cover source={{ uri: image }} />}
      <Card.Title title={title} />
      {children && <Card.Content>{children}</Card.Content>}
      <Card.Actions>
        {buttonPress && (
          <Button mode="contained" onPress={buttonPress}>
            {buttonLabel}
          </Button>
        )}
      </Card.Actions>
    </Card>
  );
}