package com.example.app_airlocunlock.pages

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.Button
import androidx.compose.material.Scaffold
import androidx.compose.material.Text
import androidx.compose.material.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import com.example.app_airlocunlock.component.CustomTopAppBar

@Composable
fun Utilisateur(navController: NavController) {
    Scaffold(
        topBar = { CustomTopAppBar(
            navController = navController,
            title = "Utilisateur",
            showBackIcon = true
        )},
        content = {
            Column(
                modifier = Modifier.padding(20.dp),
                verticalArrangement = Arrangement.Center,
                horizontalAlignment = Alignment.CenterHorizontally
            ) {

                Text(
                    text = "Utilisateur",
                    style = TextStyle(fontSize = 40.sp, fontFamily = FontFamily.Cursive)
                )

                Spacer(modifier = Modifier.height(15.dp))
                Text(text = "Bienvenue en tant qu'utilisateur")

            }
        }
    )
}