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
  [key: string]: any; // Para permitir outras props que possam ser passadas para o Card
}

export default function RecipesPattern({
  image,
  title,
  children,
  buttonLabel = "Clique aqui",
  buttonPress,
  ...props
}: RecipesPatternProps) {
  return (
    <Card {...props}>
      {image && <Card.Cover source={{ uri: image }} />}
      <Card.Title title={title} />
      {children && <Card.Content>{children}</Card.Content>}
      <Card.Actions>
        {/* Se você quiser usar o buttonPress e buttonLabel, descomente abaixo */}
        {buttonPress && (
          <Button mode="contained" onPress={buttonPress}>
            {buttonLabel}
          </Button>
        )}
      </Card.Actions>
    </Card>
  );
}