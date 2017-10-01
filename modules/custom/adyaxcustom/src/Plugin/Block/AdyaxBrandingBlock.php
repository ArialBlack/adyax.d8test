<?php

namespace Drupal\adyaxcustom\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Adyax branding block' block.
 *
 * @Block(
 *   id = "logo_block",
 *   admin_label = @Translation("Logo block")
 * )
 */
class AdyaxBrandingBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $markup = '<div class="branding">
                <div class="logo">
                    <img class="svg" src="/themes/adyax/img/logo.svg">
                    <img src="/themes/adyax/img/logo.png">
                </div>
                <div class="slogan">A Better Experience</div>
            </div>';

    return array(
        '#type' => 'markup',
        '#markup' => $markup,
    );
  }
}
